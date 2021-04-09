import React from "react";
import {
  AlertInfo,
  AtSign,
  Attach,
  BackArrow,
  Back,
  Backspace,
  Backward,
  Bag,
  Bookmark,
  Calandar,
  Call,
  Camera,
  Card,
  Cart,
  Cast,
  ChartBar,
  ChartPie,
  Check,
  Chip,
  Close,
  Comment,
  Configure,
  Copy,
  Cut,
  Delete,
  Disabled,
  Edit,
  EmojiSmile,
  Export,
  File,
  Folder,
  ForwardArrow,
  ForwardDouble,
  ForwardOnce,
  Heart,
  Hide,
  Home,
  Image,
  Layout,
  Link,
  Loading,
  Location,
  Lock,
  Mail,
  Map,
  MenuLeft,
  MenuRight,
  Microphone,
  More,
  MoreVert,
  Notification,
  Paste,
  Pause,
  Play,
  Plus,
  Printer,
  Profile,
  Refresh,
  Resize,
  Scroll,
  Search,
  Send,
  Settings,
  SoundMuted,
  SoundPlaying,
  Star,
  Tag,
  ThumbsDown,
  ThumbsUp,
  Time,
  View,
  Wifi,
} from "./icons/index";

const Icon = (props) => {
  switch (props.name?.toLowerCase()) {
    case "alertinfo":
      return <AlertInfo {...props} />;
    case "atsign":
      return <AtSign {...props} />;
    case "attach":
      return <Attach {...props} />;
    case "backarrow":
      return <BackArrow {...props} />;
    case "back":
      return <Back {...props} />;
    case "backspace":
      return <Backspace {...props} />;
    case "backward":
      return <Backward {...props} />;
    case "bag":
      return <Bag {...props} />;
    case "bookmark":
      return <Bookmark {...props} />;
    case "calandar":
      return <Calandar {...props} />;
    case "call":
      return <Call {...props} />;
    case "camera":
      return <Camera {...props} />;
    case "card":
      return <Card {...props} />;
    case "cart":
      return <Cart {...props} />;
    case "cast":
      return <Cast {...props} />;
    case "chartbar":
      return <ChartBar {...props} />;
    case "chartpie":
      return <ChartPie {...props} />;
    case "check":
      return <Check {...props} />;
    case "chip":
      return <Chip {...props} />;
    case "close":
      return <Close {...props} />;
    case "comment":
      return <Comment {...props} />;
    case "configure":
      return <Configure {...props} />;
    case "copy":
      return <Copy {...props} />;
    case "cut":
      return <Cut {...props} />;
    case "delete":
      return <Delete {...props} />;
    case "disabled":
      return <Disabled {...props} />;
    case "edit":
      return <Edit {...props} />;
    case "emojismile":
      return <EmojiSmile {...props} />;
    case "export":
      return <Export {...props} />;
    case "file":
      return <File {...props} />;
    case "folder":
      return <Folder {...props} />;
    case "forwardarrow":
      return <ForwardArrow {...props} />;
    case "forwarddouble":
      return <ForwardDouble {...props} />;
    case "forwardonce":
      return <ForwardOnce {...props} />;
    case "heart":
      return <Heart {...props} />;
    case "hide":
      return <Hide {...props} />;
    case "home":
      return <Home {...props} />;
    case "image":
      return <Image {...props} />;
    case "layout":
      return <Layout {...props} />;
    case "link":
      return <Link {...props} />;
    case "loading":
      return <Loading {...props} />;
    case "location":
      return <Location {...props} />;
    case "lock":
      return <Lock {...props} />;
    case "mail":
      return <Mail {...props} />;
    case "map":
      return <Map {...props} />;
    case "menuleft":
      return <MenuLeft {...props} />;
    case "menuright":
      return <MenuRight {...props} />;
    case "microphone":
      return <Microphone {...props} />;
    case "more":
      return <More {...props} />;
    case "morevert":
      return <MoreVert {...props} />;
    case "notification":
      return <Notification {...props} />;
    case "paste":
      return <Paste {...props} />;
    case "pause":
      return <Pause {...props} />;
    case "play":
      return <Play {...props} />;
    case "plus":
      return <Plus {...props} />;
    case "printer":
      return <Printer {...props} />;
    case "profile":
      return <Profile {...props} />;
    case "refresh":
      return <Refresh {...props} />;
    case "resize":
      return <Resize {...props} />;
    case "scroll":
      return <Scroll {...props} />;
    case "search":
      return <Search {...props} />;
    case "send":
      return <Send {...props} />;
    case "settings":
      return <Settings {...props} />;
    case "soundmuted":
      return <SoundMuted {...props} />;
    case "soundplaying":
      return <SoundPlaying {...props} />;
    case "star":
      return <Star {...props} />;
    case "tag":
      return <Tag {...props} />;
    case "thumbsdown":
      return <ThumbsDown {...props} />;
    case "thumbsup":
      return <ThumbsUp {...props} />;
    case "time":
      return <Time {...props} />;
    case "wifi":
      return <Wifi {...props} />;
    default:
      <div />;
  }
};

export default Icon;
