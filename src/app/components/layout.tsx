import { Amplify, API, graphqlOperation } from 'aws-amplify';
import awsconfig from '../../aws-exports';
import Menu from './menu';
import Topbar from './topbar';
import { useRouter } from 'next/router';
Amplify.configure(awsconfig);

export default function Layout(props: { children: React.ReactElement }) {
  const isLoginPage = useRouter().pathname == "/";
  return (
      <div id="layout" className="flex h-screen w-screen">
        {!isLoginPage? <Menu /> : <></>}
        <div id="content" className="flex flex-1 flex-col w-full h-full">
            {!isLoginPage? <Topbar/> : <></>}
            {props.children}
        </div>
      </div>
  );
}
