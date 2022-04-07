import React, { useEffect, useState } from 'react';
import {
  StatusBar,
  View,
  FlatList,
  RefreshControl,
  ActivityIndicator,
  TextInput,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import styles from './style';
import { RootStackParamList } from '~/App';
import { Icon, MovieTVCard } from '~/app/components';
import { getTVPopular, TVPopularType } from '~/app/config/actions';
import { Colors } from '~/app/config';

type TVShowListProps = NativeStackScreenProps<RootStackParamList, 'TVShowList'>;

function TVShowList({ navigation }: TVShowListProps) {
  const [search, setSearch] = useState<string>('');
  const [data, setData] = useState<TVPopularType[]>([]);
  const [page, setPage] = useState<number>(1);
  const [nextPage, setNextPage] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingLoadMore, setLoadingLoadMore] = useState<boolean>(false);
  const [, setIsError] = useState<boolean>(false);

  useEffect(() => {
    _getTVPopular();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const _getTVPopular = async (loadMore = false) => {
    if (loadMore) {
      setLoadingLoadMore(true); // loading load more
    } else {
      setPage(1);
      setLoading(true);
      setLoadingLoadMore(false);
      setIsError(false);
      setData([]);
    }
    let _page = loadMore ? page + 1 : 1;

    const resp = await getTVPopular(_page);
    if (resp.status === 200) {
      let { page: currentPage, results, total_pages: totalPages } = resp.data;
      let _nextPage = currentPage >= totalPages ? null : page + 1;
      setNextPage(results.length ? _nextPage : null);

      if (loadMore) {
        setData([...data, ...results]);
        setPage(page + 1);
      } else {
        setData(results);
        setPage(1);
      }
      setLoading(false);

      if (loadMore) {
        setTimeout(() => {
          setLoadingLoadMore(false); // loading load more
        }, 500);
      } else {
        setLoading(false);
      }
    } else {
      setIsError(true);
      loadMore ? setLoadingLoadMore(false) : setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#fff" />

      <FlatList
        style={styles.content}
        refreshControl={
          <RefreshControl
            tintColor={Colors.primary}
            colors={[Colors.primary]}
            refreshing={loading}
            onRefresh={_getTVPopular}
          />
        }
        data={data}
        extraData={data}
        renderItem={({ item }) => (
          <MovieTVCard
            data={item}
            onPress={() =>
              navigation.navigate('MovieTVDetail', { id: item.id })
            }
          />
        )}
        keyExtractor={(_, index) => 'tv-' + index}
        // stickyHeaderHiddenOnScroll
        stickyHeaderHiddenOnScroll
        stickyHeaderIndices={[0]}
        ListHeaderComponent={() => (
          <View style={styles.searchWrapper}>
            <View style={styles.search}>
              <View
                style={[styles.inputLeft, { width: 42 / 2, height: 42 / 2 }]}
              >
                <Icon name="ICSearch" />
              </View>
              <TextInput
                style={styles.input}
                value={search}
                onChangeText={(val) => setSearch(val)}
                placeholder="Search"
                placeholderTextColor={Colors.greyscaleDesc}
              />
            </View>
          </View>
        )}
        ListFooterComponent={
          loadingLoadMore ? (
            <View style={styles.footer}>
              <ActivityIndicator color={Colors.primary} />
            </View>
          ) : null
        }
        onEndReached={() => {
          if (!loadingLoadMore && nextPage !== null) {
            _getTVPopular(true);
          }
        }}
      />
    </View>
  );
}

export default TVShowList;
