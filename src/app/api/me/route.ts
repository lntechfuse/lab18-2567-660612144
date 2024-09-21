import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Nattawat ittita",
    studentId: "660612144",
  });
};
