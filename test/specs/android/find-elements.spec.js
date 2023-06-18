describe('Find elements on Android app', ()=>{

    it('should be able to find elements using Accessibility ID', async ()=>{
        // Find the element on UI
        const app = await $('~App')

        // Click on the above element
        await app.click()

        // Assertion
        const actionBar = await $('~Action Bar')
        await expect(actionBar).toBeExisting()
    })

    it('should be able to find elements using Class', async()=>{
        // Find element
        const clsElement = await $('android.widget.TextView')

        // Assertion
        await expect(clsElement).toHaveText('API Demos')
    })
})