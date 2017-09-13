import { TestBed, inject } from '@angular/core/testing';
import { Auth } from './auth.service';
describe('AuthService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [Auth]
        });
    });
    it('should ...', inject([Auth], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=/Users/lyuqi/Downloads/BitTiger/week-by-week/test/oj-client/src/app/services/auth.service.spec.js.map