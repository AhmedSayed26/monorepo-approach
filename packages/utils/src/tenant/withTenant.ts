export const withTenant = (headers: HeadersInit, tenantId: string | undefined) => {
  const newHeaders = new Headers(headers);
  if (tenantId) newHeaders.set("X-Tenant-ID", tenantId);
  return newHeaders;
};




