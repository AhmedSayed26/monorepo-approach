export type TenantId = string;
export type UserId = string;

export interface User {
  id: UserId;
  tenantId: TenantId;
  email: string;
  role: "admin" | "member";
}

export interface Subscription {
  tenantId: TenantId;
  plan: "free" | "pro" | "enterprise";
  status: "active" | "past_due" | "canceled";
}




