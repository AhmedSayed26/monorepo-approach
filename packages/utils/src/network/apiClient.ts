import ky from "ky";

export const apiClient = (baseUrl: string, getToken?: () => string | undefined) => {
  return ky.create({
    prefixUrl: baseUrl,
    hooks: {
      beforeRequest: [request => {
        const token = getToken?.();
        if (token) request.headers.set("authorization", `Bearer ${token}`);
      }]
    }
  });
};




