// export routes on application

const MENU_PARRENT = {
  ADMIN: "/admin",
};

export const ROUTES = {
  ADMIN_DASHBOARD: MENU_PARRENT.ADMIN,
  ADMIN_USERS: MENU_PARRENT.ADMIN + "/users",
  ADMIN_USER: MENU_PARRENT.ADMIN + "/users/:id",
  LOGIN: "/login",
};
