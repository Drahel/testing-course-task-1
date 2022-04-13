import {Build} from "./Tower";

import { getDocument } from 'pptr-testing-library';

import { defineFeature, loadFeature } from 'jest-cucumber';


const f = loadFeature('./test.feature');

defineFeature(f, test => {

    test('Clear console.log database', ({ given, when, then }) => {
        given("Page is loaded ", async () => {
          await page.goto("http://localhost:5500")
          await page.waitForTimeout(2000);
        });
    
        when("Clear button is pushed", async () => {
          await page.click('#clear');
        });
        
        then("Console.log database is cleared", async () => {
          await page.waitForTimeout(2000);
        });
      });

  test("New element console.log database", ({ given, when, then }) => {
    given("Page is loaded", async () => {
      await page.goto("http://localhost:5500")
      await page.waitForTimeout(3000);
    });

    when("Save button is pushed", async () => {
      const $document = await getDocument(page);
      await page.click('#save');
    });
    
    then("Console.log database has new element", async () => {
      await page.waitForTimeout(3000);
    });
  });

  test("Tower building", ({ given, when, then }) => {
    given("Page is loaded", async () => {
      await page.goto("http://localhost:5500")
      await page.waitForTimeout(3000);
    });

    when("Build button is pushed", async () => {
      const $document = await getDocument(page);
      await page.click('#start');
    });
    
    then("Tower is built", async () => {
      await page.waitForTimeout(3000);
    });
  });
 
});