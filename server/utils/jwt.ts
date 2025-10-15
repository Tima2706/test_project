import fs from "fs";
import path from "path";
import jwt from "jsonwebtoken";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

interface RefreshToken {
  token: string;
  userId: number;
  expiresAt: number;
}

interface Database {
  users: Array<User & { password: string }>;
  refreshTokens: RefreshToken[];
}

interface JwtPayload {
  userId: number;
  email: string;
  role: string;
  type: "access" | "refresh";
  iat?: number;
  exp?: number;
}

// Real JWT token generation using jsonwebtoken library
export function generateAccessToken(user: User): string {
  const config = useRuntimeConfig();

  const payload: JwtPayload = {
    userId: user.id,
    email: user.email,
    role: user.role,
    type: "access",
  };

  return jwt.sign(payload, config.jwtAccessSecret, {
    expiresIn: config.jwtAccessExpires,
  });
}

export function generateRefreshToken(userId: number): string {
  const config = useRuntimeConfig();

  const payload: JwtPayload = {
    userId,
    email: "", // Not needed for refresh tokens
    role: "", // Not needed for refresh tokens
    type: "refresh",
  };

  return jwt.sign(payload, config.jwtRefreshSecret, {
    expiresIn: config.jwtRefreshExpires,
  });
}

export function validateAccessToken(token: string): User | null {
  try {
    const config = useRuntimeConfig();

    const decoded = jwt.verify(token, config.jwtAccessSecret) as JwtPayload;

    if (decoded.type !== "access") {
      return null;
    }

    const db = getDatabase();
    const user = db.users.find((u) => u.id === decoded.userId);
    if (!user) return null;

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    };
  } catch (error) {
    // Token is invalid or expired
    return null;
  }
}

export function getDatabase(): Database {
  const dbPath = path.join(process.cwd(), "data", "db.json");
  const dbContent = fs.readFileSync(dbPath, "utf-8");
  return JSON.parse(dbContent);
}

export function saveDatabase(db: Database): void {
  const dbPath = path.join(process.cwd(), "data", "db.json");
  fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
}

export function findUserByEmail(
  email: string
): (User & { password: string }) | null {
  const db = getDatabase();
  return db.users.find((u) => u.email === email) || null;
}

export function findUserById(id: number): User | null {
  const db = getDatabase();
  const user = db.users.find((u) => u.id === id);
  if (!user) return null;

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
  };
}

export function storeRefreshToken(token: string, userId: number): void {
  const db = getDatabase();

  try {
    const config = useRuntimeConfig();
    const decoded = jwt.verify(token, config.jwtRefreshSecret) as JwtPayload;

    // Calculate expiry time from token
    const expiresAt = decoded.exp
      ? decoded.exp * 1000
      : Date.now() + 7 * 24 * 60 * 60 * 1000; // 7 days default

    // Remove existing refresh tokens for this user
    db.refreshTokens = db.refreshTokens.filter((t) => t.userId !== userId);

    // Add new refresh token
    db.refreshTokens.push({ token, userId, expiresAt });

    saveDatabase(db);
  } catch (error) {
    throw new Error("Invalid refresh token");
  }
}

export function validateRefreshToken(token: string): number | null {
  try {
    const config = useRuntimeConfig();

    const decoded = jwt.verify(token, config.jwtRefreshSecret) as JwtPayload;

    if (decoded.type !== "refresh") {
      return null;
    }

    const db = getDatabase();
    const refreshToken = db.refreshTokens.find((t) => t.token === token);

    if (!refreshToken) return null;

    return refreshToken.userId;
  } catch (error) {
    // Token is invalid or expired
    const db = getDatabase();
    db.refreshTokens = db.refreshTokens.filter((t) => t.token !== token);
    saveDatabase(db);
    return null;
  }
}

export function removeRefreshToken(token: string): void {
  const db = getDatabase();
  db.refreshTokens = db.refreshTokens.filter((t) => t.token !== token);
  saveDatabase(db);
}

export function createUser(
  userData: Omit<User & { password: string }, "id">
): User {
  const db = getDatabase();
  const newId = Math.max(...db.users.map((u) => u.id), 0) + 1;

  const newUser = {
    id: newId,
    ...userData,
  };

  db.users.push(newUser);
  saveDatabase(db);

  return {
    id: newUser.id,
    name: newUser.name,
    email: newUser.email,
    role: newUser.role,
  };
}
