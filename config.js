"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by Levi on 2017/2/16.
 */
exports.default = {
    cluster_no: 0,
    sys_name: "ex",
    sys_allow_origin: "http://127.0.0.1",
    sys_allow_api_origin: ["http://192.168.2.239:8685","http://127.0.0.1:8181", "http://127.0.0.1:8081", "http://127.0.0.1:8100", "http://192.168.2.206:8100", "http://192.168.2.57:8686", "http://192.168.2.57:9000", "http://yq.ngoex.io"],
    sys_exposed_headers: "Link, X-Total-Count",
    sys_exposed_api_headers: "Link, X-Total-Count",

    // 系统初始化执行的等待时间
    sys_init_execute_timeout: 1,

    // debug 为 true 时，用于本地调试
    debug: false,

    //api grid size
    api_grid_default_size: 10,

    //controller grid size
    controller_grid_default_size: 10,

    ex_java_server_uri: "http://127.0.0.1:4321/",
    ex_apache_server_uri: "http://127.0.0.1:4321/",
    // collect currency uri
    collect_switch: 0,
    collect_currency_uri: "https://www.okex.com/v2/market/index/ticker?symbol=f_usd_${currency_type}",
    currency_zones: ["btc", "eth", "usdt", 'ngb', 'eos'],
    collect_spot_currency_uri: "wss://okexcomreal.bafang.com:10441/websocket",
    collect_spot_kline_uri: "https://www.okex.com/api/v1/kline.do?symbol=${symbol}&type=${type}",
    collect_market_kline_uri: "https://www.okex.com/v2/market/index/kLine?symbol=f_usd_${currency_type}&type=${type}&limit=1000&coinVol=0",
    collect_eth_token_uri: "https://etherscan.io/address-tokenpage?a=${token}",
    collect_eth_uri: "https://etherscan.io/address/${token}",

    collect_spot_currency_interval: 10, //秒
    spot_kline_type: { quarter: '15min', hour: '1hour', day: '1day', week: '1week' },
    market_kline_type: { quarter: '15min', hour: '1hour', day: 'day', week: 'week' },

    eth_to_ngb_rate: 2500,

    // websocket
    eth_ws_url: 'wss://socket.etherscan.io/wshandler',
    btc_ws_url: "wss://ws.blockchain.info/inv",

    eth_bit: 1000000000000000000,
    btc_bit: 100000000,

    // upload image dir
    upload_image_dir: "/Users/wjh/test/",
    upload_video_dir: "/Users/wjh/test/",
    upload_html_dir: "/Users/wjh/test/html",
    kyc2_dir_name: "kyc2",
    kyc3_dir_name: "kyc3",
    activity_dir_name: 'activity',
    trade_setting_dir_name: 'trade_setting',
    banner_dir_name: 'banner',
    web_banner_dir_name: 'web',
    app_banner_dir_name: 'app',
    static_image_url: "http://static.ngoex.com/images/",
    static_video_url: "http://static.ngoex.com/videos/",
    static_html_url: "http://static.ngoex.com/html/",

    base_jade: 'webapp/views/base.jade',

    usdt_name: "USDT",
    usdt: 'btc',

    market_rise_rate_start: 0.03,
    market_rise_rate_end: 0.05,
    market_rise_rate: 0.1,

    // payment_mode
    bank_code: 1,
    wx_code: 2,
    ali_code: 4,

    // alidayu
    alidayu_sign_name: '创想科技',
    alidayu_app_key: '23455804',
    alidayu_app_secret: 'b1070af75adafee1bb8f21f66d2fb740',
    alidayu_register_template_id: "SMS_125745050",
    alidayu_rest_url: "http://gw.api.taobao.com/router/rest",
    alidayu_tmc_url: "ws://mc.api.taobao.com/",

    // exclude filter uri
    console_filter_exclude_uri: 'allticker|GET',
    console_filter_include_uri: 'customers/trade_info|GET,exchange_confirm|PUT,payment_paid|PUT,payment_confirmed|PUT',
    device_id_filter_exclude_uri: 'allticker|GET,robot/customer_initializer|ALL,robot/spot_amount_reset|ALL,ddddd|ALL,ddddd,monitors|GET',
    session_token_filter_exclude_uri: 'allticker|GET,customers/promotion_code_verifiable|ALL,sys/parameters|ALL,customers/password_reset|ALL,index_prices|ALL,robot/customer_initializer|ALL,robot/spot_amount_reset|ALL,kLines/market|ALL,customers/login|ALL,customers/register|POST,dictionaries|ALL,data_order|GET,currencies|GET,sms_code|POST,phone|GET,activities|ALL,caches|ALL,monitors|GET',
    cors_domain: '192.168.2.239',

    spot_currency_fixed: 8,
    currency_fixed: 8,
    money_fixed: 2,
    rate_fixed: 2,
    currency_number_fixed: 3,
    rise_rate_fixed: 3,
    spot_queue_number_fixed: 3,
    spot_queue_price_fixed: 4,
    candy_random_fixed: 8,

    spot_price_point_length: 4,
    legal_price_point_length: 2,
    number_point_length: 8,
    number_max_length: 9,

    ok_user: "13328756270",
    ok_password: "novonity@123",
    ok_proxy_host: "127.0.0.1",
    ok_proxy_port: 1080,

    java_switch: true,

    // database config
    // /*    db_name: "ex",
    //     db_username: "user",
    //     db_password: "password"@123',
    //     db_host: "127.0.0.1",
    //     db_dialect: 'mysql',
    //     db_port: 3306,*/
    // db_name: "ex",
    // db_username: "user",
    // db_password: "password",
    // db_host: "127.0.0.1",
    // db_dialect: 'mysql',
    // db_port: 3306,
    db_pool_max: 5,
    db_pool_min: 0,
    db_pool_idle: 1000,
    db_logging: true,
    //
    db_name: "ex",
    db_username: "root",
    db_password: "123456",
    db_host: "192.168.2.239",
    db_dialect: 'mysql',
    db_port: 3306,

    // db_name: "ex",
    // db_username: "user",
    // db_password: "password",
    // db_host: "127.0.0.1",
    // db_dialect: 'mysql',
    // db_port: 3306,

    // redis config
    redis_queue_spot: 'spot-queue',
    redis_host: 'localhost',
    redis_port: 6379,
    redis_db: 0,
    redis_pwd: null,

    vip_phones: [13719312592, 13728005667, 18819812592, 18899758217],
    vip_names: ['曹斌'],

    //sms config
    sms_253_account: 'N4060672',
    sms_253_password: '8M3jTq5Wz0371d',
    sms_253_host: 'https://smssh1.253.com',
    sms_253_send_path: '/msg/variable/json',
    sms_253_signature: '【NGOEX】',
    sms_253_template_general: '尊敬的用户，您正在{$var}，验证码:{$var}请勿向任何人包括客服提供验证码。',
    sms_253_msg: {
        default_msg: '使用ngoex',
        registrable: '使用手机号码注册账户',
        password_change: '修改登陆密码',
        phone_change: '修改手机绑定',
        capital_password_change: '修改资金密码',
        withdrawal_address_addable: '添加提现地址'
    },
    sms_trade_template: '您的订单号为{$var}，{$var}单价为{$var}，币种为{$var}，数量为{$var}个，总价为{$var}元的订单',
    sms_253_payment_paid_template: '对方已完成支出，请及时查账，确认到账后请及时放币，若未收到款项，可申请客诉处理。1小时内未处理订单，将会自动放币给对方。',
    sms_overtime_template: '由于对方超时未支付，系统已自动取消。',
    sms_253_payment_confirm_template: '对方已确认收款并放币，请您及时查收。',
    sms_253_sell_text: '售出',
    sms_253_buy_text: '买入',

    ticker_factor_increase_number: 10,
    // bai_du
    bai_du_app_id: 2107874712,
    bai_du_app_key: "OT0xWzdgicTWHWwt",
    bai_du_id_card_ocr_url: "https://api.ai.qq.com/fcgi-bin/ocr/ocr_idcardocr",

    default_role_code: '01',

    jkmanage_url: 'http://192.168.2.239:4321/jkmanager/status?mime=xml'
};
