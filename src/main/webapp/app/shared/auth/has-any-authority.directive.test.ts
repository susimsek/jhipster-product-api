import * as has_any_authority_directive from "app/shared/auth/has-any-authority.directive"
import * as account_service from "app/core/auth/account.service"

// @ponicode
describe("updateView", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new account_service.AccountService(undefined, undefined, undefined)
        inst2 = new has_any_authority_directive.HasAnyAuthorityDirective(inst, undefined, undefined)
    })

    test("0", () => {
        let callFunction: any = () => {
            inst2.updateView()
        }
    
        expect(callFunction).not.toThrow()
    })
})
