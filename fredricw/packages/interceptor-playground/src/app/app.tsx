// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import NxWelcome from './nx-welcome';

export function App() {
  return (
    <div className="bg-slate-100">
      <NxWelcome title="interceptor-playground" />
    </div>
  );
}

export default App;
