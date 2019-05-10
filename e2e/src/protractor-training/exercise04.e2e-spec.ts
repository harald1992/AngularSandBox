import { Exercise04 } from './exercise04.po';

describe('workspace-project App', () => {
  let page: Exercise04;

  beforeEach(() => {
    page = new Exercise04();
  });

  it('first test', () => {
    page.navigateTo();
    expect(2).toEqual(2);
  });
});
