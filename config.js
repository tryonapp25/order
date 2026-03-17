export const config = {
  SOCKET_PORT: Number(process.env.SOCKET_PORT),
  SERVER_PORT: Number(process.env.SERVER_PORT),
};

export const origins = [
  "http://localhost:5173",
  "http://localhost:8080",
  "https://api.prod.taply.dk",
  "https://api.dev.taply.dk",
]

export const orderStatus = {
    PENDING: "PENDING",
    CONFIRMED: "CONFIRMED",
    REJECTED: "REJECTED",
    PREPARING: "PREPARING",
    READY: "READY",
    COMPLETED: "COMPLETED",
    CANCELLED: "CANCELLED"
}