import React, { useState } from 'react'
import SearchBar from './SearchBar/SearchBar'
import SearchIcon from './SearchIcon/SearchIcon';
import ChatMember from '../MemberList/ChatMember/ChatMember';
import GivenTags from './GivenTags/GivenTags';
import DropDown from '../Existing_Tag/DropDown/DropDown';
import AllTag from '../Existing_Tag/AllTag/AllTag';
import SearchedProfile from './SearchedProfile/SearchedProfile';
import RecentSearch from './RecentSearch/RecentSearch';
const SearchCreateTask = () => {
  const chatListMember = {
    "error_code": 0,
    "chat": "Success",
    "data": {
      "chats": [
        {
          "chat_id": 1,
          "chat_user_id": 3,
          "chat_user_name": "piyush",
          "chat_title": "Sell Products",
          "unread_count": 2,
          "chat_image_url": "/person-icon.svg",
          "members_image_url": [
            "/profile-image2.svg",

          ],
          "member_user_ids": [1, 2],
          "time_ago": "2 minutes ago",
          "created_at": "09-04-2023 17:48:10"
        },
        {
          "chat_id": 2,
          "chat_title": "Place order",
          "chat_user_name": "karuna kashyap",
          "unread_count": 5,
          "chat_image_url": "/group-chat-member-white.svg",
          "members_image_url": [
            "/profile-image2.svg",
            "/profile-image2.svg"
          ],
          "member_user_ids": [1, 2],
          "time_ago": "2 hours ago",
          "created_at": "09-04-2023 17:48:10"
        },
        {
          "chat_id": 3,
          "chat_user_id": 6,
          "chat_user_name": "mihir",
          "chat_title": "Make Report",
          "is_logged_in": false,
          "unread_count": 6,
          "chat_image_url": "/group-chat-member-white.svg",
          "members_image_url": [
            "/profile-image2.svg",
            "/profile-image2.svg",
            "/profile-image2.svg"

          ],
          "member_user_ids": [1, 2],
          "time_ago": "1 day ago",
          "created_at": "09-04-2023 17:48:10"
        },
        {
          "chat_id": 1,
          "chat_user_id": 3,
          "chat_user_name": "piyush",
          "chat_title": "Take Survey",
          "is_logged_in": true,
          "unread_count": 20,
          "chat_image_url": "/person-icon.svg",
          "members_image_url": [
            "/profile-image2.svg",
            "/profile-image2.svg",
            "/profile-image2.svg"
          ],
          "member_user_ids": [1, 2],
          "time_ago": "2 day ago",
          "created_at": "09-04-2023 17:48:10"
        }
      ],
      "page": 2,
      "is_next_page": true,
      "is_prev_page": true
    }
  }
  const [inputValue, setInputValue] = useState('');
  const [selectedTags, setSelectedTags] = useState([
    {
      "title": "Developer1",
      "isSelected": true,
    },
    {
      "title": "Developer2",
      "isSelected": true,
    },
    {
      "title": "Developer3",
      "isSelected": true,
    }
  ]);
  const removeTag = (index) => {
    const a = [...selectedTags];
    a.splice(index, 1)
    setSelectedTags(a)
  }
  const selectTagOption = (optionValue) => {
    const tags = [
      ...selectedTags,
      {
        title: optionValue.title,
        isSelected: true
      }
    ];
    setSelectedTags(tags)
  }
  const [searchedBar, setSearchedBar] = useState(true)
  const [showMembers, setShowMembers] = useState(false);
  const handleClick = () => {
    setShowMembers(true);
    setActiveTasks(false)
    setGivenTag(false);
    setSearchProfile(false)
    setSearchedBar(true)
    setFilterIconUrl('/filter-blue-icon1.svg')
    setMembersIconUrl('/members-icon-blue.svg')
    setChatsIcon('/chat-yellow-icon.svg')
    setTasksIcon('/tasks-icon-blue.svg')
    setBottom('30px')
    setIconBottomSet('0px')


  };
  const [giveTag, setGivenTag] = useState(false)
  const showGivenTag = () => {
    setGivenTag(true)
    setSearchedBar(false)
    setShowMembers(false)
    setActiveTasks(false)
    setRecentSearched(false)
    setSearchProfile(false)
    setFilterIconUrl('/filter-yellow-icon1.svg')
    setMembersIconUrl('/members-icon-blue.svg')
    setChatsIcon('/chat-blue-icon.svg')
    setTasksIcon('/tasks-icon-blue.svg')
    setBottom('30px')
    setIconBottomSet('0px')


  }
  const [activetasks, setActiveTasks] = useState(false);
  const handleTask = () => {
    setActiveTasks(true);
    setSearchedBar(true)
    setGivenTag(false)
    setShowMembers(false)
    setSearchProfile(false)
    setFilterIconUrl('/filter-blue-icon1.svg')
    setMembersIconUrl('/members-icon-blue.svg')
    setChatsIcon('/chat-blue-icon.svg')
    setTasksIcon('/tasks-icon-yellow.svg')
    setBottom('30px')
    setIconBottomSet('0px')

  };
  const getInputValue = (value) => {
    setInputValue(value)
  }
  const [searchProfile, setSearchProfile] = useState(false)
  const showSearchProfile = () => {
    setSearchProfile(false)
    setGivenTag(false);
    setActiveTasks(false)
    setSearchedBar(true)
    setRecentSearched(true)
    setShowMembers(false)
    setFilterIconUrl('/filter-blue-icon1.svg')
    setMembersIconUrl('/members-icon-yellow.svg')
    setChatsIcon('/chat-blue-icon.svg')
    setTasksIcon('/tasks-icon-blue.svg')
    setBottom('30px')
    setIconBottomSet('0px')

  }
  const [recentSearched, setRecentSearched] = useState(true);
  const [filterIconUrl, setFilterIconUrl] = useState('/filter-blue-icon1.svg');
  const [membersIconUrl, setMembersIconUrl] = useState('/members-icon-yellow.svg');
  const [chatsIcon, setChatsIcon] = useState('/chat-blue-icon.svg');
  const [tasksIcon, setTasksIcon] = useState('/tasks-icon-blue.svg')
  const [bottom, setBottom] = useState('30px');
  const [iconBottomset, setIconBottomSet] = useState('0px')
  const [showButton, setShowButton] = useState(false);
  const [applybuttonBackground, setApplyButtonBackground] = useState('white')
  const [clearButtonBackground, setClearButtonBackground] = useState('#2B8CA7');
  const [locationSrc, setLocationScr] = useState('location-blue-icon.svg');
  const [fillIconScr, setFillIconScr] = useState('fill-tag-grey-icon.svg')
  const changeSrc = () => {
    setLocationScr('/location-blue-icon.svg')
    setFillIconScr('/fill-tag-grey-icon.svg')
    setShowButton(false)
    setBottom('30px')
    setIconBottomSet('0px')
  }
  const changeFillSrc = () => {
    setFillIconScr('/fill-tag-blue-icon.svg')
    setLocationScr('/location-grey-icon.svg')
    setShowButton(true)
    setApplyButtonBackground('#D9D9D9')
    setClearButtonBackground('#2B8CA7')
    setBottom('100px')
    setIconBottomSet('70px')
  }
  const changeColor = () => {
    setApplyButtonBackground('#D9D9D9')
    setClearButtonBackground('#2B8CA7')
  }
  const changeApplyButtonColor = () => {
    setApplyButtonBackground('#2B8CA7')
    setClearButtonBackground('#D9D9D9')
  }
  return (
    <div>
      {searchedBar && <SearchBar inputValue={inputValue} getvalue={getInputValue} />}

      {showMembers ?
        chatListMember.data.chats.map((chat, index) => (
          <div key={index}>
            <ChatMember title={chat.chat_title} name={chat.chat_user_name}
              chatImageUrl={chat.chat_image_url}
              memberImages={chat.members_image_url} inputValue={inputValue} />
          </div>
        )) : ``}
      {activetasks ? chatListMember.data.chats.map((chat, index1) => (
        <div key={index1}>
          <ChatMember title={chat.chat_title} name={chat.chat_user_name}
            chatImageUrl={chat.chat_image_url}
            memberImages={chat.members_image_url} inputValue={inputValue} />
        </div>
      )) : ``}
      {giveTag ?
        <div>
          <GivenTags showButton={showButton} applybuttonBackground={applybuttonBackground} clearButtonBackground={clearButtonBackground}
            locationSrc={locationSrc} fillIconScr={fillIconScr} changeSrc={changeSrc} changeFillSrc={changeFillSrc}
            changeColor={changeColor} changeApplyButtonColor={changeApplyButtonColor} />
          <AllTag tags={selectedTags} removeTag={removeTag} />
          <DropDown selectTagOption={selectTagOption} />
        </div>
        : ``}
      {inputValue.length > 0 && <SearchedProfile query={inputValue} />}
      {recentSearched && <RecentSearch />}

      <SearchIcon showMembers={handleClick} showTasks={handleTask} showGivenTag={showGivenTag}
        showSearchProfile={showSearchProfile} filterIconUrl={filterIconUrl} membersIconUrl={membersIconUrl}
        chatsIcon={chatsIcon} tasksIcon={tasksIcon} bottomSet={bottom} iconBottomset={iconBottomset} />


    </div>
  )
}

export default SearchCreateTask
