import { async, TestBed } from '@angular/core/testing';
import { ProblemListComponent } from './problem-list.component';
describe('ProblemListComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ProblemListComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ProblemListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/lyuqi/Downloads/BitTiger/week-by-week/test/oj-client/src/app/components/problem-list/problem-list.component.spec.js.map