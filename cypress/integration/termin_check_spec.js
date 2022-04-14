// const { expect } = require("chai")
// import chai, { expect } from "chai";

describe('Check Divers License Availability', () => {
	it('Only For Next Month!', () => {
		cy.visit('https://terminvereinbarung.muenchen.de/fs/termin/index.php?loc=FS')
		cy.contains('ausländischen Führerscheins').click()
		cy.get('body > div.content > div.terminbuchung').get('#Umschreibung_SPACE_eines_SPACE_ausländischen_SPACE_Führerscheins > li > select').select('1')
		cy.get('input.WEB_APPOINT_FORWARDBUTTON').click()
		cy.get('div.nat_calendar_nav').get('a[href*="NEXT"]').click()
		console.dir(cy.get('table.nat_calendar > tbody').get('td.nat_calendar').find('span'))
		cy.get('table.nat_calendar > tbody').get('td.nat_calendar > span:nth-child(1)').each(($el, index, $list) => {
			cy.wrap($el).should('not.be.visible').should('contain.text', 'Keine freien Termine am')
		})
	})
  })
