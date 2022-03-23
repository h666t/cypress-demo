describe("百度", () => {
  it("可以搜索", () => {
    cy.visit("https://www.baidu.com")
    cy.get("input#kw").type("饥人谷")
    cy.contains("百度一下").click()
  })
})
