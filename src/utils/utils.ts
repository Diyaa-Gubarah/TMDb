import SensitiveInfo from 'react-native-sensitive-info';

export const getData = async (key: string): Promise<string | null> => {
  const data = await SensitiveInfo.getItem(key, {});
  return data;
};

export const saveData = async (key: string, value: string) => {
  await SensitiveInfo.setItem(key, value, {});
};

export const removeData = async (key: string) => {
  await SensitiveInfo.deleteItem(key, {});
};


export const truncateTitle = (title: string, maxLength: number = 10): string => {
  if (title.length > maxLength) {
    return `${title.substring(0, maxLength)}...`;
  }
  return title;
}