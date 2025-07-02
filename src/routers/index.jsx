
// import {LeaderboardPage} from '../pages/Leaderboard';
// import {AuthRoute} from './Routes/AuthRoute';
// import {GuestRoute} from './Routes/GuestRoute';
// import {ErrorBoundary} from 'client/src/components/ErrorBoundary';

// export const router = createBrowserRouter([
// 	{
// 		errorElement: <ErrorBoundary/>,
// 		children: [
// 			{
// 				path: PATHS.home,
// 				element: <PageLanding/>,
// 			},
// 			{
// 				path: PATHS.profile,
// 				element: (
// 					<AuthRoute>
// 						<PageProfile/>
// 					</AuthRoute>
// 				),
// 			},
// 			{
// 				path: PATHS.mainMenu,
// 				element: <MainMenu/>,
// 				children: [
// 					{
// 						path: PATHS.mainMenu,
// 						element: <MainMenuMain/>,
// 					},
// 					{
// 					{
// 						path: PATHS.mainMenuSettings,
// 						element: <MainMenuSettings/>,
// 					},
// 				],
// 			},
// 			{
// 				path: PATHS.page500,
// 				element: <Page500/>,
// 			},
// 			{
// 				path: PATHS.page404,
// 				element: <Page404/>,
// 			},
// 			{
// 				path: PATHS.auth,
// 				element: (
// 					<GuestRoute>
// 						<PageAuth/>
// 					</GuestRoute>
// 				),
// 			},
// 		],
// 	},
// ]);
