//TODO: Remove if unused
import { NameContextProvider } from 'src/context/NavContext';

export const ContextProviders = ({ children }) => {
  return <NameContextProvider>{children}</NameContextProvider>;
};
