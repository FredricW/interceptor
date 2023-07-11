export function interceptor() {
  try {
    import('./InterceptorRoot');
  } catch (e) {
    console.error(e);
  }
}
