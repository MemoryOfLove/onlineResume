const resumeModel: TSRcReduxModel.Props<TSResume.IntactResume> = {
    namespace: 'resumeModel',
    openSeamlessImmutable: true,
    state: {
      base: {
        avatar: '',
        username: 'xx',
        area: '辽宁·大连',
        school: '吉x大学',
        major: '软件工程',
        degree: '本科',
        hometown: '大连',
        onSchoolTime: {
          beginTime: '2015.09',
          endTime: '2019.06',
        },
      },
      contact: {
        phone: '186****630',
        email: '554737661@qq.com',
        github: 'https://github.com/MemoryOfLove',
      },
      work: {
        job: '',
        city: '大连｜北京',
        cityList: ['大连', '北京', ''],
      },
      hobby: '动漫、游戏',
      skill:
        'skill1｜skill2',
      skillList: [
        'skill1',
        'skill2',
      ],
      evaluation:
        'evaluation',
      evaluationList: [
        'evaluationList1',
        'evaluationList2',
      ],
      certificate: '奖1',
      certificateList: ['奖2'],
      schoolExperience: [
        {
          beginTime: '2016.09',
          endTime: '2017.09',
          post: '文艺部会长',
          department: '校团委学生会',
          content:
            '计划、组织、协调各年级学生组织的文艺和文化娱乐活动',
          parseContent: [
            '计划、组织、协调各年级学生组织的文艺和文化娱乐活动',
          ],
        },
      ],
      workExperience: [
        {
          beginTime: '2017.09',
          endTime: '2019.04',
          post: '前端工程师',
          department: '湖南瞎说大学网络中心',
          content:
            'content1',
          parseContent: [
            'content1',
          ],
        },
      ],
      projectExperience: [
        {
          beginTime: '2021.03',
          endTime: '2021.05',
          projectName: '可视化简历平台',
          post: '前端工程师',
          content:
            'content1｜content2',
          parseContent: [
            'content1',
            'content2',

          ],
          date: 1621145137865,
        },
      ],
    },
  };
  
  export default resumeModel;
  