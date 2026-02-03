declare module '@ant-design/icons-vue' {
  import { Component } from 'vue';

  const icons: Record<string, Component>;
  export = icons;
  export default icons;

  // 导出一些常用的图标类型
  export const UserOutlined: Component; // 用户
  export const HomeOutlined: Component; // 首页
  export const SettingOutlined: Component; // 设置
  export const MenuOutlined: Component; // 菜单
  export const SearchOutlined: Component; // 搜索
  export const PlusOutlined: Component; // 加号
  export const EditOutlined: Component; // 编辑
  export const DeleteOutlined: Component; // 删除
  export const CheckOutlined: Component; // 勾选
  export const CloseOutlined: Component; // 关闭
  export const DownOutlined: Component; // 下
  export const UpOutlined: Component; // 上
  export const LeftOutlined: Component; // 左
  export const RightOutlined: Component; // 右
  export const LoadingOutlined: Component; // 加载
  export const EyeOutlined: Component; // 眼睛
  export const EyeInvisibleOutlined: Component; // 眼睛
  export const BellOutlined: Component; // 消息中心
  export const LogoutOutlined: Component; // 退出
  export const DownloadOutlined: Component; // 下载
  export const ExclamationCircleOutlined: Component; // 警告
  export const HomeTwoTone: Component; //
  export const CopyOutlined: Component; //
  export const QuestionCircleOutlined: Component; // 问号
  export const PlusCircleOutlined: Component; // 加号
  // 可以根据需要添加更多图标
}
