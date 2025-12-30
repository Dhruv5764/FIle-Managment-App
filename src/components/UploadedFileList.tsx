import { useEffect, useState } from "react";
import { View, Text, ScrollView, RefreshControl } from "react-native";
import { listFiles } from "../services/listFiles";
import SwipeableFileItem from "./SwipeableFileItem";
import {  fileSignal } from "@/lib/fileEvents";

export default function UploadedFileList() {
  const [files, setFiles] = useState<any[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  const loadFiles = async () => {
    try {
      const data = await listFiles();
      setFiles(data || []);
    } catch (err) {
      console.log("List error", err);
    }
  };

  useEffect(() => {
    loadFiles();
    const unsub = fileSignal.subscribe(loadFiles);
    return unsub;
  }, []);
  
  const onRefresh = async () => {
    setRefreshing(true);
    await loadFiles();
    setRefreshing(false);
  };

  const removeFromUI = (name: string) =>
    setFiles((prev) => prev.filter((f) => f.name !== name));

  if (!files.length) {
    return (
      <View className="rounded-3xl bg-white shadow-lg p-4">
        <Text className="text-slate-400 text-center">
          No files uploaded yet
        </Text>
      </View>
    );
  }

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View className=" rounded-3xl bg-white shadow-lg p-3 space-y-3">
        {files.map((file) => (
          <SwipeableFileItem
            key={file.name}
            file={file}
            onDeleted={removeFromUI}
          />
        ))}
      </View>
    </ScrollView>
  );
}
