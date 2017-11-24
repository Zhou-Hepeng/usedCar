let truckTypeList = {
    // 车型分类
    cat_id: {
        c66: {
            id: 66,
            name: '牵引车',
            type: ['attr_1', 'attr_2', 'attr_3', 'attr_4', 'attr_5', 'attr_6','attr_10'],
            next: true
        },
        c64: {
            id: 64,
            name: '载货车',
            type: ['attr_1', 'attr_2', 'attr_3', 'attr_4', 'attr_6', 'attr_8', 'attr_9'],
            next: true
        },
        c63: {
            id: 63,
            name: '自卸车',
            type: ['attr_1', 'attr_2', 'attr_3', 'attr_4', 'attr_6', 'attr_7', 'attr_10'],
            next: true
        },
        c65: {
            id: 65,
            name: '轻卡',
            type: ['attr_1', 'attr_2', 'attr_3', 'attr_6', 'attr_7', 'attr_8'],
            next: true
        },
        c100001: {
            id: 100001,
            name: '挂车',
            type: ['attr_7', 'attr_11', 'attr_12', 'attr_13'],
            next: false
        },
        c67: {
            id: 67,
            name: '搅拌车',
            type: ['attr_1', 'attr_2', 'attr_3', 'attr_4', 'attr_6', 'attr_10', 'attr_14', 'attr_15', 'attr_16'],
            next: true
        },
        c4: {
            id: 4,
            name: '专用车',
            type: ['attr_1', 'attr_2', 'attr_3', 'attr_4', 'attr_6'],
            next: true
        }
    },
    // 排放标准
    attr_2: {
        c2: {
            id: '2',
            name: '国二'
        },
        c3: {
            id: '3',
            name: '国三'
        },
        c4: {
            id: '4',
            name: '国四'
        },
        c5: {
            id: '5',
            name: '国五'
        },
        c0: {
            id: '其他',
            name: '其他'
        }
    },
    // 变速箱档位
    attr_3: {
        c5: {
            id: '5',
            name: '5'
        },
        c6: {
            id: '6',
            name: '6'
        },
        c7: {
            id: '7',
            name: '7'
        },
        c8: {
            id: '8',
            name: '8'
        },
        c9: {
            id: '9',
            name: '9'
        },
        c10: {
            id: '10',
            name: '10'
        },
        c12: {
            id: '12',
            name: '12'
        },
        c13: {
            id: '13',
            name: '13'
        },
        c14: {
            id: '14',
            name: '14'
        },
        c16: {
            id: '16',
            name: '16'
        },
        c0: {
            id: '其他',
            name: '其他'
        }
    },
    // 后桥速比
    attr_10: {
        c0: {
            id: '2.86',
            name: '2.86'
        },
        c1: {
            id: '3.08',
            name: '3.08'
        },
        c2: {
            id: '4.11',
            name: '4.11'
        },
        c3: {
            id: '4.44',
            name: '4.44'
        },
        c4: {
            id: '4.875',
            name: '4.875'
        },
        c5: {
            id: '5.275',
            name: '5.275'
        },
        c6: {
            id: '其他',
            name: '其他'
        }
    },
    // 驱动形式
    attr_4: {
        c0: {
            id: '4X2',
            name: '4X2'
        },
        c1: {
            id: '6X2',
            name: '6X2'
        },
        c2: {
            id: '6X4',
            name: '6X4'
        },
        c3: {
            id: '8X4',
            name: '8X4'
        },
        c4: {
            id: '其他',
            name: '其他'
        }
    },
    // 挂车型号
    attr_11: {
        c1: {
            id: '仓栅式',
            name: '仓栅式'
        },
        c2: {
            id: '栏板式',
            name: '栏板式'
        },
        c3: {
            id: '集装箱',
            name: '集装箱'
        },
        c4: {
            id: '厢式',
            name: '厢式'
        },
        c5: {
            id: '低平板式',
            name: '低平板式'
        },
        c6: {
            id: '其他',
            name: '其他'
        }
    },
    // 轴数
    attr_12: {
        c1: {
            id: '1',
            name: '1'
        },
        c2: {
            id: '2',
            name: '2'
        },
        c3: {
            id: '3',
            name: '3'
        },
        c4: {
            id: '其他',
            name: '其他'
        }
    },
    // 悬挂形式
    attr_13: {
        c1: {
            id: '钢板',
            name: '钢板'
        },
        c2: {
            id: '气囊',
            name: '气囊'
        },
        c3: {
            id: '其他',
            name: '其他'
        }
    }
}

export { truckTypeList }

// {
//     name: 'attr_1',
//     text: '发动机品牌'
// },{
//     name: 'attr_2',
//     text: '排放标准'
// },{
//     name: 'attr_3',
//     text: '变速箱档位'
// },{
//     name: 'attr_4',
//     text: '驱动形式'
// },{
//     name: 'attr_5',
//     text: '准牵引总重量'
// },{
//     name: 'attr_6',
//     text: '马力'
// },{
//     name: 'attr_7',
//     text: '货箱长度'
// },{
//     name: 'attr_8',
//     text: '准载质量'
// },{
//     name: 'attr_9',
//     text: '自重'
// },{
//     name: 'attr_10',
//     text: '后桥速比'
// },{
//     name: 'attr_11',
//     text: '挂车型号'
// },{
//     name: 'attr_12',
//     text: '轴数'
// },{
//     name: 'attr_13',
//     text: '悬挂形式'
// },{
//     name: 'attr_14',
//     text: '上装品牌'
// },{
//     name: 'attr_15',
//     text: '减速机品牌'
// },{
//     name: 'attr_16',
//     text: '方量'
// }