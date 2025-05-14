"use client";

import { Video } from "@/domain/entities/video.entity";
import { UseCaseFactory } from "@/infrastructure/factories/use-cases.factory";
import { action, makeAutoObservable } from "mobx";

export enum VideoCategory {
  OVER_THE_CAST = "1",
  FLOW_EXPERIENCE = "2",
  NETSHOW_TALKS = "3",
  LIVE = "4",
  PLAYLIST = "5",
}

class HomeStore {
  overTheCastVideos: Video[] = [];
  flowExperienceVideos: Video[] = [];
  netshowTalksVideos: Video[] = [];
  liveVideos: Video[] = [];
  playlistVideos: Video[] = [];

  loading = {
    overTheCast: true,
    flowExperience: true,
    netshowTalks: true,
    live: true,
    playlist: true,
  };

  constructor() {
    makeAutoObservable(this, {
      loadOverTheCastVideos: action.bound,
      loadFlowExperienceVideos: action.bound,
      loadNetshowTalksVideos: action.bound,
      loadLiveVideos: action.bound,
      loadPlaylistVideos: action.bound,
    });
  }

  async loadOverTheCastVideos() {
    this.loading.overTheCast = true;
    try {
      const useCase = UseCaseFactory.getListVideosUseCase();
      this.overTheCastVideos = await useCase.execute({
        per_page: 6,
        category_id: VideoCategory.OVER_THE_CAST,
      });
    } finally {
      this.loading.overTheCast = false;
    }
  }

  async loadFlowExperienceVideos() {
    this.loading.flowExperience = true;
    try {
      const useCase = UseCaseFactory.getListVideosUseCase();
      this.flowExperienceVideos = await useCase.execute({
        per_page: 6,
        category_id: VideoCategory.FLOW_EXPERIENCE,
      });
    } finally {
      this.loading.flowExperience = false;
    }
  }

  async loadNetshowTalksVideos() {
    this.loading.netshowTalks = true;
    try {
      const useCase = UseCaseFactory.getListVideosUseCase();
      this.netshowTalksVideos = await useCase.execute({
        per_page: 6,
        category_id: VideoCategory.NETSHOW_TALKS,
      });
    } finally {
      this.loading.netshowTalks = false;
    }
  }

  async loadLiveVideos() {
    this.loading.live = true;
    try {
      const useCase = UseCaseFactory.getListVideosUseCase();
      this.liveVideos = await useCase.execute({
        per_page: 6,
        category_id: VideoCategory.LIVE,
      });
    } finally {
      this.loading.live = false;
    }
  }

  async loadPlaylistVideos() {
    this.loading.playlist = true;
    try {
      const useCase = UseCaseFactory.getListVideosUseCase();
      this.playlistVideos = await useCase.execute({
        per_page: 6,
        category_id: VideoCategory.PLAYLIST,
      });
    } finally {
      this.loading.playlist = false;
    }
  }
}

export const homeStore = new HomeStore();
