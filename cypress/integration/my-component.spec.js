describe('My First Test', function() {
  it('renders', function() {
    cy.visit('/').wait(500)
    // Tim xem có component my-component hay khong?
    // check xem my-component có class hydrated
    cy.get('my-component')
      .should('have.class', 'hydrated')
  }),
  it('renders changes to the name data', function() {
    cy.visit('/').wait(500)
    // cy.dwGet('my-component div')
    //   .dwAttach()
    //   .should('have.text', 'Hello, World hehe! I\'m ')
    //   .dwDetach()
    cy.get('my-component').first().then( ele => {
      cy.log(ele[0].componentOnReady)
      cy.log(ele[0].attributeChangedCallback)
      // ele[0].attributeChangedCallback= () => {console.log('blah')}
      ele[0].first = 'James'
      cy.wait(2000)
    
      let body = Cypress.$(".aut-iframe body").clone()
      // replaceIframes(body)
      body.find("script,link[rel='stylesheet'],style").remove()
      cy.log(body)
      cy.screenshot()
      cy.log('bo may set roi')
      cy.log(ele[0])
    })
    cy.wait(2000)
    cy.get('my-component').first().then( ele => {
      cy.log(ele[0])
    })
    // cy.wait(2000)
    // cy.dwGet('my-component div').dwAttach().should('have.text', 'Hello, World hehe! I\'m James').dwDetach()
    // my_component.setProp('first', 'James')
      // .dwAttach()
      // .should('have.text', 'Hello, World hehe! I\'m James')
      // .dwDetach()
      
    // my_component.setProp('last', 'Quincy')
      // .dwAttach()
      // .should('have.text', 'Hello, World hehe! I\'m James Quincy')
      // .dwDetach()

    // my_component.setProp('middle', 'Earl')
    // my_component.dwAttach()
    //   .should('have.text', 'Hello, World hehe! I\'m James Earl Quincy')
    //   .dwDetach()
  })
})
