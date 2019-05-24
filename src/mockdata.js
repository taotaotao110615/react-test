import Mock from 'mockjs'

const Random = Mock.Random ;// Mock.Random 是一个工具类，用于生成各种随机数据

    Mock.mock('/data',{
        'name':Random.csentence(4),
    })
