# Front_end
Html, css, javascripts

## carousel
- 100% html, css, javascripts만 사용하였으며 모두 직접 만들었습니다.
- [프로젝트 링크](./inan_carousel)
- 간단한 소개
  - 7개의 원이 다음 아이템 위치로 이동합니다.
  - 처음 위치 아이템은 opacity를 1로 마지막 아이템으로 가는 아이템은 0으로 설정됩니다.
  - 다음 이벤트는 2초마다 무한반복됩니다.
- 시행착오
  - css와 javascripts를 잘 모를때 처음 만들어서 css 애니메이션을 많이 사용하였습니다.
    - css는 아이템값을 실제로 바꾸지 않는다.
    - 대부분의 css 애니메이션을 js코드로 바꿈 -> 아이템 값 실제로 변경  


![./picture/carousel-ex.gif](./picture/carousel-ex.gif)


## Menu
- html, css만 이용하여 제작
- [프로젝트 링크](./flex/flex_menu)
- 간단한 소개
  - 간단한 메뉴바 및 애플 헤더를 클론코딩했습니다.
  - flex 속성을 이용하여 제작했습니다.
- 시행착오
  - 애플 메뉴바를 클론 코딩할때 문제가 발생
    1. 메뉴바가 가운데 정렬이 되어 있고 양 옆의 마진이 커지고 작아지는 움직임을 동일하게 구현하는데 어려움이 있었습니다.
    2. 해결책이 맞는지 모르지만 동일하게 동작하게 구현하였습니다.(자세한 내용은 소스코드 확인)

![./picture/Menu.gif](./picture/Menu.gif)

## Card List
- html, css만 이용하여 제작
- [프로젝트 링크](./flex/flex_card_list)
- 간단한 소개
  - flex속성을 이용한 카드 리스트
- 제작과정
  1. 사진 영역과 설명 영역을 나눈다.
  2. media 쿼리를 이용하여 크기변경에 따라 카드수를 정한다.
  3. padding과 margin을 이용하여 카드간 자연스러운 간격을 만들어준다.
  4. flex-grow를 이용하여 같은 행의 카드 크기를 맞추어준다.

![./picture/card_list.gif](./picture/card_list.gif)


## 종합 flex Page
- 미리 만들어 놓았던 아이템들을 이용하여 페이지 제작
- [프로젝트 링크](./flex/flex_page)
- 간단한 소개
  - flex 디스플레이를 이용하여 모바일, pc버전 등으로 화면사이즈 변경에 따라 유연하게 변하는 사이트 제작
- 제작과정
  1. header, side-left, side-right, main, footer 영역으로 나눔
  2. flex 컨테이너와 미디어쿼리를 이용하여 유연한 사이트제작

![./picture/flex_page.gif](./picture/flex_page.gif)
