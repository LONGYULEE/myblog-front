import {
    Button,
    message,
    Icon,
    Row,
    Tag,
    Col,
    Progress,
    Result
} from 'ant-design-vue';

const ant = {
    install: function (Vue) {
        Vue.use(message);
        Vue.component(Button.name, Button);
        Vue.component(Icon.name, Icon);
        Vue.component(Row.name, Row);
        Vue.component(Tag.name, Tag);
        Vue.component(Col.name, Col);
        Vue.component(Progress.name, Progress);
        Vue.component(Result.name, Result);
        Vue.prototype.$message = message;
    }
};
export default ant