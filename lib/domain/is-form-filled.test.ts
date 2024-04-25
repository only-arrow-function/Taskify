import { describe, expect, test } from '@jest/globals';

import { isFormFilled } from './is-form-filled';

describe("객체 검사 함수 테스트", () => {
  test.each([
    [{
      columnId: 20004,
      assigneeUserId: 1546,
      dashboardId: 5947,
      title: '',
      description: '',
      dueDate: '',
      tags: [],
      imageUrl: '',
    }, false],
    [{
      columnId: 20004,
      assigneeUserId: 1546,
      dashboardId: 5947,
      title: '안녕?',
      description: '축하합니다.',
      dueDate: '',
      tags: [],
      imageUrl: '블라블라',
    }, false],
    [{
      columnId: 20004,
      assigneeUserId: 1546,
      dashboardId: 5947,
      title: '굿',
      description: '굿',
      dueDate: '굿',
      tags: ["안녕", "굿"],
      imageUrl: '굿',
    }, true],
  ])("각 결과에 맞게 boolean을 리턴한다.", (data, result) => {
    const isFilled = isFormFilled(data);

    expect(isFilled).toBe(result);
  });
});
