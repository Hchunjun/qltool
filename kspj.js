/*
IOS/安卓： 快手极速版1.0旧版
必看！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！

此版本为日收益1.5元脚本 已去除目前知道的助力地址，不保证没有其他的隐藏助力
0x180c0c是助力地址，助力地址删了，找不到助力地址，报错很正常，只要能正常加钱就没问题

必看！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！
已实现的：签到和翻倍，开宝箱和翻倍，看广告任务，逛街任务，抽奖和翻倍，广告任务，分享任务
金币每天0点自动兑换到现金余额

V2P和圈X配置好重写后，应该打开APP就能获取到CK，获取不到的话升级下app或者手动捉包
青龙把任意包里的kuaishou.api_st=xxxxxxxxxxxx;这一串东西放到变量ksjsbCookie里，多账户换行或者用@隔开
export ksjsbCookie='kuaishou.api_st=xxxxxxxxxxxx;
kuaishou.api_st=yyyyyyyyy;'

默认每天15点提现，要改的话把提现时间填到变量ksjsbWithdrawTime里
默认按照账户的提现列表从高到低提现到绑定的提现账号，都有绑定的话默认提现到支付宝。要固定提现金额的话填到变量ksjsbCash里。如果提现失败，手动接验证码提现一次
默认提现时间会触发通知，可以把ksjsbNotify设置成2改为每次运行都通知，ksjsbNotify设置为0则不通知

定时一天最少10次就行，最好改掉默认时间，不然太多人同一时间跑

重写：
[task_local]
#快手极速版
[rewrite_local]
[MITM]
#IOS用第一个，安卓用第二个
hostname = api.kuaisho*.com
hostname = open.kuaisho*.com
*/