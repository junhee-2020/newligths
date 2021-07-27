// API 함수 정리 (현재 로컬 버전 차후 axios로 전환 예정)
const fetchWorshipGuideContent = 
    new Promise((resolve) => {
        resolve([            
            {   key: '1',
                title: '유초등부 예배',
                date: '일시 : 주일 아침 9시',
                place: '장소 : 새빛교회 본당'
            },
            {   key: '2',
                title: '주일 낮 예배',
                date: '일시 : 주일 아침 11시',
                place: '장소 : 새빛교회 본당'
            },
            {   key: '3',
                title: '젊은 예배',
                date: '일시 : 주일 낮 1시',
                place: '장소 : 새빛교회 본당'
            },
            {   key: '4',
                title: '중고청 젊은 예배',
                date: '일시 : 주일 낮 3시',
                place: '장소 : 새빛교회 본당'
            },
        ]);
    });

const fetchWayToComeContent = 
    new Promise((resolve) => {
        resolve([
            {   key_en: 'churchName',
                key_ko: '교회 이름',
                value: '새빛교회'
            },                        
            {   key_en: 'phoneNumber',
                key_ko: '전화 번호',
                value: '02-893-2017'
            },
            {   key_en: 'churchAddress',
                key_ko: '교회 주소',
                value: '경기 광명시 하안로 258 경향빌딩 4층 새빛교회 [인근 지하철: 독산역(1호선), 철산역(7호선)]'
            },
            {   key_en: 'parkingInformation',
                key_ko: '주차 정보',
                value: '상가 내 작은주차장 (5대)'
            },            
            ]);
    });

    const fetchAboutChurchContent = 
    new Promise((resolve) => {
        resolve([            
            {   key: '1',
                title: '터다지기반',
                target: '대상: 믿기 시작한 청/장년',
                date: '일시 : 화요일 오후 5시',
                place: '장소 : 새빛교회 교육관'
            },
            {   key: '2',
                title: '장로 기도회',
                target: '대상: 장로님',
                date: '일시 : 주일 오후 1시',
                place: '장소 : 새빛교회 교육관'
             },
             {   key: '3',
                title: '여구역장 성경공부',
                target: '대상: 여구역장',
                date: '일시 : 목요일 오후 6시',
                place: '장소 : 새빛교회 교육관'
            },
            {   key: '4',
                title: '제자 훈련',
                target: '대상: 리더 추천자',
                date: '일시 : 금요일 오후 7시 30분',
                place: '장소 : 새빛교회 교육관'
            },     
            {   key: '5',
                title: '청년 헬퍼 훈련',
                target: '대상: 청년 헬퍼 및 청년 리더 추천자',
                date: '일시 : 목요일 오후 7시 30분',
                place: '장소 : 새빛교회 교육관'
            }, 
            {   key: '6',
                title: '청년 리더 및 헬퍼 훈련',
                target: '대상: 청년 리더 및 헬퍼',
                date: '일시 : 토요일 오후 5시',
                place: '장소 : 새빛교회'
            }                                          
        ]);
    });    

export {
    fetchWorshipGuideContent,
    fetchWayToComeContent,
    fetchAboutChurchContent
}