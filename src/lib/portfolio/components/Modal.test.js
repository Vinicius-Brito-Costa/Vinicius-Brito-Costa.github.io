import { expect, it } from 'vitest'
import { render, getDefaultNormalizer } from '@testing-library/svelte'
import Modal from './Modal.svelte'

it("Should not display modal", () => {
    const mockProject = {
        name:  "Teste",
        markdown: "md.test",
        technologies: [
            {
                name: "svelte",
                useCase: "The first version of DAPI was created in Svelte."
            }
        ],
        links: [
            {
                name: "digi-api.com",
                url: "https://www.digi-api.com/"
            }
        ]
    }
    const modal = render(Modal, { open: false, project: mockProject, activateModal: ()=>{}})
    let classes = modal.container.getElementsByClassName("modal-container")[0].classList
    expect(classes.contains("modal-close")).true
    modal.unmount()
})

it("Display modal", () => {
    const mockProject = {
        name:  "Teste",
        markdown: "md.test",
        technologies: [
            {
                name: "svelte",
                useCase: "The first version of DAPI was created in Svelte."
            }
        ],
        links: [
            {
                name: "digi-api.com",
                url: "https://www.digi-api.com/"
            }
        ]
    }
    const modal = render(Modal, { open: true, project: mockProject, activateModal: ()=>{}})
    let classes = modal.container.getElementsByClassName("modal-container")[0].classList
    expect(classes.contains("modal-open")).true
    modal.unmount()
})