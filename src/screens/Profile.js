import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Share,
  LogBox,
  ActivityIndicator
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';

import {useSelector, connect, useDispatch} from 'react-redux';
import {listUsers} from '../redux/actions/fetchUserAction';
import {addComments} from '../redux/actions/commentAction';

const Profile = () => {
  const user = useSelector((state) => state.userDetails);
  const [comment, setComment] = useState('');

  const commentData = useSelector((state) => state.comment);

  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  const allUserResult = useSelector((state) => state.allUsers);

  const {error, allUsers, loading} = allUserResult;

  useEffect(() => {
    dispatch(listUsers(1));
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, [page]);

  const loadMoreData = () => {
    console.log("ss")
    setPage(page + 1);
    dispatch(listUsers(page));
    console.log('page', page);
  };

  function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

  const addCommentToState = () => {
    if (comment !== '') {
      dispatch(addComments([{email: comment, id: makeid(4)}, ...commentData]));
      setComment('');
    }
  };

  const handelShare = async () => {
    try {
      const result = await Share.share({
        message: `Hi i am ${user.name} working as ${user.profession} and having work experience of ${user.workExperience}`,
      });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  const renderItem = ({item}) => (
    <View
      style={{
        backgroundColor: '#fafafa',
        height: 38,
        justifyContent: 'center',
        elevation: 1,
        marginTop: 10,
        paddingLeft: 10,
      }}>
      <Text
        style={{
          color: '#333',
        }}>
        {item ? item.email : item.comment}
      </Text>
    </View>
  );

  return (
    <ScrollView vertical style={styles.main_container}>
      <View style={styles.inner_container}>
        <Text style={styles.text_username}>{user.name}</Text>
        <Text style={styles.text_other}>{`Address: ${user.address}`}</Text>

        <Text style={styles.text_other}>{`Location: ${user.location}`}</Text>
        <Text
          style={styles.text_other}>{`Profession: ${user.profession}`}</Text>
        <Text
          style={
            styles.text_other
          }>{`Experience: ${user.workExperience}`}</Text>
      </View>

      <View style={{height: 50, margin: 5}}>
        <TouchableOpacity
          onPress={() => handelShare()}
          style={{
            height: '100%',
            backgroundColor: '#fafafa',
            justifyContent: 'center',
            alignItems: 'center',
            elevation: 3,
            borderRadius:7,
            display: 'flex',
            flexDirection: 'row',
          }}>
          <Text
            style={{
              color: '#222',
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            Share
          </Text>

          <Icon name="share-social-outline" size={18} color={'#000'} style={{marginLeft: 10, alignSelf: 'center'}} />
        </TouchableOpacity>
      </View>

      <View style={{height: 270, margin: 5, paddingBottom: 20,}}>
        {/* <FlatList data={commentData} renderItem={renderUserComment} /> */}
        {loading ? (
          <Text>Loading</Text>
        ) : (
          <FlatList
            data={commentData.concat(allUsers)}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{paddingBottom: 20, paddingTop: 2,}}
            // ListFooterComponent={() => (loading ? <ActivityIndicator /> : null)}
            onEndReachedThreshold={0.3}
            onEndReached={(end) => loadMoreData()}
          />
        )}
      </View>
      <View
        style={{
          height: 60,
          margin: 5,
          backgroundColor: '#1b5e20',
          flexDirection: 'row',
          marginBottom: 10,
          marginTop: 20,
          borderRadius: 5,
          elevation: 2
        }}>
        <View style={{flex: 5}}>
          <KeyboardAvoidingView>
            <TextInput
              placeholderTextColor="#ddd"
              placeholder="Enter a comment..."
              onChangeText={(text) => setComment(text)}
              defaultValue={comment}
              style={{
                borderBottomColor: '#eee',
                width: '90%',
                borderBottomWidth: 2,
                marginBottom: 5,
                padding: 5,
                fontSize: 18,
                marginLeft: 5,
                color: '#eee',
              }}
            />
          </KeyboardAvoidingView>
        </View>
        <TouchableOpacity
          onPress={() => addCommentToState()}
          style={{
            flex: 1,
            height: 35,
            width: 35,
            alignSelf: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#eee',
            marginHorizontal: 6,
            borderRadius: 5
          }}>
              <Icon name="add-outline" size={25} color={'#000'} 
              style={{alignSelf: 'center', fontWeight: 'bold'}} />

        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    padding: 5,
    backgroundColor: '#eee',
  },
  inner_container: {
    margin: 4,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    marginBottom: 10,
    marginTop: 10,
    shadowColor: '#000',
    backgroundColor: '#1b5e20',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 10,
  },
  text_other: {
    color: '#f5f5f5',
    fontSize: 14,
    marginTop: 5,
    fontStyle: 'italic',
  },
  text_username: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default Profile;
