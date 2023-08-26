import { it } from 'vitest'
import { render } from '@testing-library/svelte'
import NavbarLink from './NavbarLink.svelte'


it("Display link with name defined", () => {
    let link = render(NavbarLink, {selectedLink: "about", name: "projects", setSelected: ()=>"about"})
    link.getByText("projects()")
    link.unmount()
})

it("Display link with name defined and mark as selected", () => {
    let link = render(NavbarLink, {selectedLink: "about", name: "about", setSelected: ()=>"about"})
    link.getByText("> about()")
    link.unmount()
})
