import { RouterModule } from "@angular/router";
import { ProblemListComponent } from './components/problem-list/problem-list.component';
import { ProblemDetailComponent } from './components/problem-detail/problem-detail.component';
import { ProfileComponent } from './components/profile/profile.component';
var routes = [
    {
        path: "",
        redirectTo: "problems",
        pathMatch: "full"
    },
    {
        path: "problems",
        component: ProblemListComponent
    },
    {
        path: "problems/:id",
        component: ProblemDetailComponent
    },
    {
        path: "profile",
        component: ProfileComponent,
        canActivate: ['authGuard']
    },
    {
        path: "**",
        redirectTo: "problems",
    }
];
export var routing = RouterModule.forRoot(routes);
//# sourceMappingURL=/Users/lyuqi/Downloads/BitTiger/week-by-week/test/oj-client/src/app/app.routes.js.map