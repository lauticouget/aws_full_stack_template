import './global.css';
import { ApolloWrapper } from '@/lib/graphql/ApolloWrapper';
import { UserProvider } from '@/lib/context/UserContext';
import { Header } from './components/Header';

export const metadata = {
  title: 'Your Name — Full-Stack Developer',
  description:
    'Full-stack starter built with Next.js, GraphQL, and AWS serverless infrastructure.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <ApolloWrapper>
          <UserProvider>
            <Header />
            {children}
          </UserProvider>
        </ApolloWrapper>
      </body>
    </html>
  );
}
