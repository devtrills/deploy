import '/public/src/App.css';
import '/public/src/components/article/article.css';
import '/public/src/components/brand/brand.css';
import '/public/src/components/cta/cta.css';
import '/public/src/components/feature/feature.css';
import '/public/src/components/navbar/navbar.css';
import '/public/src/containers/blog/blog.css';
import '/public/src/containers/features/features.css';
import '/public/src/containers/footer/footer.css';
import '/public/src/containers/header/header.css';
import '/public/src/containers/possibility/possibility.css';
import '/public/src/containers/whatGPT3/whatGPT3.css';
import '/public/src/index.css';
import { UserProvider } from '@auth0/nextjs-auth0';

export default function MyApp({ Component, pageProps }) {
  return (
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    )
  }