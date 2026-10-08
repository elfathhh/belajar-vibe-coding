import { Elysia } from "elysia";
import { db } from "../db";
import { sql } from "drizzle-orm";

export const healthRoute = new Elysia({ prefix: "/health" }).get(
  "/",
  async () => {
    let dbStatus = "disconnected";
    let dbError: string | null = null;

    try {
      await db.execute(sql`SELECT 1`);
      dbStatus = "connected";
    } catch (error: any) {
      dbStatus = "error";
      dbError = error.message || "Gagal terhubung ke database";
    }

    return {
      status: "ok",
      timestamp: new Date().toISOString(),
      database: {
        status: dbStatus,
        ...(dbError ? { error: dbError } : {}),
      },
    };
  }
);
