import Vue from 'vue';
import {
  Container,
  Header,
  Aside,
  Main,
  Form,
  FormItem,
  Menu,
  MenuItem,
  Card,
  Input,
  Button,
  Tag,
  Message,
  Notification
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Card);
Vue.use(Input);
Vue.use(Button);
Vue.use(Tag);

Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;
