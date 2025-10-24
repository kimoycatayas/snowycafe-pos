// Simple database connection for now
// TODO: Set up proper Prisma client

export const prisma = {
  product: {
    findMany: async (options?: any) => [],
    create: async (data: any) => ({ id: "1", ...data.data }),
    update: async ({ where, data }: any) => ({ id: where.id, ...data }),
    delete: async ({ where }: any) => ({ id: where.id }),
  },
  order: {
    findMany: async (options?: any) => [],
    create: async (data: any) => ({ id: "1", ...data.data }),
  },
  orderItem: {
    create: async (data: any) => ({ id: "1", ...data.data }),
  },
  $transaction: async (callback: any) => {
    return await callback({
      order: {
        create: async (data: any) => ({ id: "1", ...data.data }),
      },
      orderItem: {
        create: async (data: any) => ({ id: "1", ...data.data }),
      },
      product: {
        update: async ({ where, data }: any) => ({ id: where.id, ...data }),
      },
    });
  },
};
