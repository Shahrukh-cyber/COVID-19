import React from 'react';
import {
  ScrollView,
  RefreshControl,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

import {WebView} from 'react-native-webview';

function wait(timeout) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

export default function Activities() {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, [refreshing]);

  return (
   
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
              <WebView
        source={{uri: 'https://www.youtube.com/channel/UCuqBZWK9Wrol_4Y22DzisFQ/playlists'}}
      />

      </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:30,
  },
  scrollView: {
    flex: 1,
    marginTop:-50
  },
});
