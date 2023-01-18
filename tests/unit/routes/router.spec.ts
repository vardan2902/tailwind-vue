import router from '@/router/index';

describe('Router', () => {
  it('should have two routes', () => {
    expect(router.options.routes).toHaveLength(2);
  });

  it('should have a route for the tasks view', () => {
    const taskRoute = router.options.routes.find(
      (route) => route.name === 'tasks'
    );
    expect(taskRoute).toBeDefined();
    expect(taskRoute?.path).toBe('/');
  });

  it('should have a route for the profile view', () => {
    const profileRoute = router.options.routes.find(
      (route) => route.name === 'profile'
    );
    expect(profileRoute).toBeDefined();
    expect(profileRoute?.path).toBe('/profile');
  });
});
