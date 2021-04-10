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
  Minus,
} from "./icons/index";

const Icon = (props) => {
  return (
    <>
      {props.name?.toLowerCase() === "alertinfo" && <AlertInfo {...props} />}
      {props.name?.toLowerCase() === "atsign" && <AtSign {...props} />}
      {props.name?.toLowerCase() === "attach" && <Attach {...props} />}
      {props.name?.toLowerCase() === "backarrow" && <BackArrow {...props} />}
      {props.name?.toLowerCase() === "back" && <Back {...props} />}
      {props.name?.toLowerCase() === "backspace" && <Backspace {...props} />}
      {props.name?.toLowerCase() === "backward" && <Backward {...props} />}
      {props.name?.toLowerCase() === "bag" && <Bag {...props} />}
      {props.name?.toLowerCase() === "bookmark" && <Bookmark {...props} />}
      {props.name?.toLowerCase() === "calandar" && <Calandar {...props} />}
      {props.name?.toLowerCase() === "call" && <Call {...props} />}
      {props.name?.toLowerCase() === "camera" && <Camera {...props} />}
      {props.name?.toLowerCase() === "card" && <Card {...props} />}
      {props.name?.toLowerCase() === "cart" && <Cart {...props} />}
      {props.name?.toLowerCase() === "cast" && <Cast {...props} />}
      {props.name?.toLowerCase() === "chartbar" && <ChartBar {...props} />}
      {props.name?.toLowerCase() === "card" && <Card {...props} />}
      {props.name?.toLowerCase() === "chartpie" && <ChartPie {...props} />}
      {props.name?.toLowerCase() === "check" && <Check {...props} />}
      {props.name?.toLowerCase() === "chip" && <Chip {...props} />}
      {props.name?.toLowerCase() === "close" && <Close {...props} />}
      {props.name?.toLowerCase() === "comment" && <Comment {...props} />}
      {props.name?.toLowerCase() === "configure" && <Configure {...props} />}
      {props.name?.toLowerCase() === "copy" && <Copy {...props} />}
      {props.name?.toLowerCase() === "cut" && <Cut {...props} />}
      {props.name?.toLowerCase() === "delete" && <Delete {...props} />}
      {props.name?.toLowerCase() === "disabled" && <Disabled {...props} />}
      {props.name?.toLowerCase() === "edit" && <Edit {...props} />}
      {props.name?.toLowerCase() === "emojismile" && <EmojiSmile {...props} />}
      {props.name?.toLowerCase() === "export" && <Export {...props} />}
      {props.name?.toLowerCase() === "file" && <File {...props} />}
      {props.name?.toLowerCase() === "folder" && <Folder {...props} />}
      {props.name?.toLowerCase() === "forwardarrow" && (
        <ForwardArrow {...props} />
      )}
      {props.name?.toLowerCase() === "forwarddouble" && (
        <ForwardDouble {...props} />
      )}
      {props.name?.toLowerCase() === "forwardonce" && (
        <ForwardOnce {...props} />
      )}
      {props.name?.toLowerCase() === "heart" && <Heart {...props} />}
      {props.name?.toLowerCase() === "hide" && <Hide {...props} />}
      {props.name?.toLowerCase() === "home" && <Home {...props} />}
      {props.name?.toLowerCase() === "image" && <Image {...props} />}
      {props.name?.toLowerCase() === "layout" && <Layout {...props} />}
      {props.name?.toLowerCase() === "link" && <Link {...props} />}
      {props.name?.toLowerCase() === "loading" && <Loading {...props} />}
      {props.name?.toLowerCase() === "location" && <Location {...props} />}
      {props.name?.toLowerCase() === "lock" && <Lock {...props} />}
      {props.name?.toLowerCase() === "mail" && <Mail {...props} />}
      {props.name?.toLowerCase() === "map" && <Map {...props} />}
      {props.name?.toLowerCase() === "menuleft" && <MenuLeft {...props} />}
      {props.name?.toLowerCase() === "menuright" && <MenuRight {...props} />}
      {props.name?.toLowerCase() === "microphone" && <Microphone {...props} />}
      {props.name?.toLowerCase() === "more" && <More {...props} />}
      {props.name?.toLowerCase() === "morevert" && <MoreVert {...props} />}
      {props.name?.toLowerCase() === "notification" && (
        <Notification {...props} />
      )}
      {props.name?.toLowerCase() === "paste" && <Paste {...props} />}
      {props.name?.toLowerCase() === "pause" && <Pause {...props} />}
      {props.name?.toLowerCase() === "play" && <Play {...props} />}
      {props.name?.toLowerCase() === "plus" && <Plus {...props} />}
      {props.name?.toLowerCase() === "printer" && <Printer {...props} />}
      {props.name?.toLowerCase() === "profile" && <Profile {...props} />}
      {props.name?.toLowerCase() === "refresh" && <Refresh {...props} />}
      {props.name?.toLowerCase() === "resize" && <Resize {...props} />}
      {props.name?.toLowerCase() === "scroll" && <Scroll {...props} />}
      {props.name?.toLowerCase() === "search" && <Search {...props} />}
      {props.name?.toLowerCase() === "send" && <Send {...props} />}
      {props.name?.toLowerCase() === "settings" && <Settings {...props} />}
      {props.name?.toLowerCase() === "soundmuted" && <SoundMuted {...props} />}
      {props.name?.toLowerCase() === "soundplaying" && (
        <SoundPlaying {...props} />
      )}
      {props.name?.toLowerCase() === "star" && <Star {...props} />}
      {props.name?.toLowerCase() === "tag" && <Tag {...props} />}
      {props.name?.toLowerCase() === "thumbsdown" && <ThumbsDown {...props} />}
      {props.name?.toLowerCase() === "thumbsup" && <ThumbsUp {...props} />}{" "}
      {props.name?.toLowerCase() === "time" && <Time {...props} />}
      {props.name?.toLowerCase() === "view" && <View {...props} />}
      {props.name?.toLowerCase() === "wifi" && <Wifi {...props} />}
      {props.name?.toLowerCase() === "minus" && <Minus {...props} />}
    </>
  );
};

export default Icon;
