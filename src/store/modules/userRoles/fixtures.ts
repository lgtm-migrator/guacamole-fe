export const userRoles = [
  {
    description: 'default description',
    id: '-LPQEUQL0-SsOtBVWIqV',
    resourceAccessLevels: [{
      permissions: [
        {
          id: '-LPQEUQw7ldP_9WPpZVH',
          type: 'Full Access',
        },
        {
          id: '-LPQEUQwN8W2-47PBNHX',
          type: 'View',
        },
        {
          id: '-LPQEUQwICD_sDKxauqD',
          type: 'Edit',
        },
        {
          id: '-LPQEUQw1mSrxxj95BrV',
          type: 'Add',
        },
      ],
      resource: {
        id: '-LPQEUR9VoWVCJVR338i',
        name: 'Centers',
      },
    }],
    title: 'People Coordinator',
    userCount: 1,
    data: [],
  },
  {
    description: 'reports to the operations director',
    id: '-LPQEUQLa-uiTYNwxouO',
    resourceAccessLevels: [{
      permissions: [
        {
          id: '-LPQEUQwN8W2-47PBNHX',
          type: 'View',
        },
        {
          id: '-LPQEUQwICD_sDKxauqD',
          type: 'Edit',
        },
        {
          id: '-LPQEUQw1mSrxxj95BrV',
          type: 'Add',
        },
      ],
      resource: {
        id: '-LPQEUR9VoWVCJVR338i',
        name: 'Centers',
      },
    }],
    title: 'Operations Manager',
    userCount: 1,
    data: [],
  },
  {
    description: 'reports to the operations manager',
    id: '-LPQEUQLTR4qgE_0-mwi',
    resourceAccessLevels: [{
      permissions: [
        {
          id: '-LPQEUQw7ldP_9WPpZVH',
          type: 'Full Access',
        },
        {
          id: '-LPQEUQwN8W2-47PBNHX',
          type: 'View',
        },
        {
          id: '-LPQEUQwICD_sDKxauqD',
          type: 'Edit',
        },
        {
          id: '-LPQEUQw1mSrxxj95BrV',
          type: 'Add',
        },
      ],
      resource: {
        id: '-LPQEUR9VoWVCJVR338i',
        name: 'Centers',
      },
    }],
    title: 'Operations Assistant',
    userCount: 1,
    data: [],
  },
];

export const newUserRole = {
  title: 'Assistant Manager',
  description: 'Operations Director',
  resourceAccessLevels: [
    {
      resourceId: '-LNjbkWKS2ZfeFyhjwI8',
      permissionIds: ['-LNjbkWGcwz9bDeCKix2'],
    },
  ],
};

export const userRoleResourcePermission = {
  data: userRoles,
  permissions: [
    {
      id: '-LPQEUQw7ldP_9WPpZVH',
      type: 'Full Access',
    },
    {
      id: '-LPQEUQwN8W2-47PBNHX',
      type: 'View',
    },
    {
      id: '-LPQEUQwICD_sDKxauqD',
      type: 'Edit',
    },
    {
      id: '-LPQEUQw1mSrxxj95BrV',
      type: 'Add',
    },
  ],
  resource: {
    id: '-LPQEUR9VoWVCJVR338i',
    name: 'Centers',
  },
};
