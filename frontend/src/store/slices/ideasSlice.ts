import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface Idea {
  id: string;
  title: string;
  description: string;
  contentType: string;
  keywords: string[];
  trendScore: number;
  createdAt: string;
  isFavorite: boolean;
}

interface IdeasState {
  ideas: Idea[];
  currentIdea: Idea | null;
  loading: boolean;
  error: string | null;
}

const initialState: IdeasState = {
  ideas: [],
  currentIdea: null,
  loading: false,
  error: null,
};

// Async thunks for ideas
export const generateIdeas = createAsyncThunk(
  'ideas/generate',
  async (params: { contentType: string; topic: string; tone: string }, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/ideas/generate', params);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to generate ideas');
    }
  }
);

export const saveIdea = createAsyncThunk(
  'ideas/save',
  async (idea: Partial<Idea>, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/ideas/save', idea);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to save idea');
    }
  }
);

export const fetchIdeas = createAsyncThunk('ideas/fetch', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get('/api/ideas');
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.response?.data?.message || 'Failed to fetch ideas');
  }
});

export const deleteIdea = createAsyncThunk(
  'ideas/delete',
  async (id: string, { rejectWithValue }) => {
    try {
      await axios.delete(`/api/ideas/${id}`);
      return id;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to delete idea');
    }
  }
);

const ideasSlice = createSlice({
  name: 'ideas',
  initialState,
  reducers: {
    clearCurrentIdea: (state) => {
      state.currentIdea = null;
    },
    setCurrentIdea: (state, action: PayloadAction<Idea>) => {
      state.currentIdea = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // Generate ideas
    builder.addCase(generateIdeas.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(generateIdeas.fulfilled, (state, action: PayloadAction<Idea>) => {
      state.loading = false;
      state.currentIdea = action.payload;
    });
    builder.addCase(generateIdeas.rejected, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = action.payload;
    });

    // Save idea
    builder.addCase(saveIdea.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(saveIdea.fulfilled, (state, action: PayloadAction<Idea>) => {
      state.loading = false;
      state.ideas.unshift(action.payload);
    });
    builder.addCase(saveIdea.rejected, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = action.payload;
    });

    // Fetch ideas
    builder.addCase(fetchIdeas.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchIdeas.fulfilled, (state, action: PayloadAction<Idea[]>) => {
      state.loading = false;
      state.ideas = action.payload;
    });
    builder.addCase(fetchIdeas.rejected, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = action.payload;
    });

    // Delete idea
    builder.addCase(deleteIdea.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deleteIdea.fulfilled, (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.ideas = state.ideas.filter((idea) => idea.id !== action.payload);
    });
    builder.addCase(deleteIdea.rejected, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const { clearCurrentIdea, setCurrentIdea, clearError } = ideasSlice.actions;
export default ideasSlice.reducer;
