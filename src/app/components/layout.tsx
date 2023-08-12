import { Amplify, API, graphqlOperation } from 'aws-amplify';
import awsconfig from '../../aws-exports';
import Menu from './menu';
import Topbar from './topbar';
Amplify.configure(awsconfig);


export default function Layout(props: { children: React.ReactElement }) {
  return (
      <div id="layout" className="flex h-screen w-screen">
        <Menu />
        <div id="content" className="flex flex-1 flex-col w-full h-full">
            <Topbar/>
            {props.children}
        </div>
      </div>
  );
}
